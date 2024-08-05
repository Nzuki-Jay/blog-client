import { apiSlice } from "../../Api";

export const blogsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: ({ page = 1, pageSize = 3, tags = [], search = '' }) => {
                let queryString = `page=${page}&pageSize=${pageSize}`;
                
                if (tags.length) {
                    queryString += `&tags_like=${tags.join(",")}`;
                }

                if (search) {
                    queryString += `&q=${search}`;
                }

                return `/blogs?${queryString}`;
            },
            transformResponse: (response, meta, arg) => {
                // params 
                const {tags = [], search = '', page = 1, pageSize = 3} = arg || {};
                let blogs = response;

                // Count the number of blogs for each tag
                const tagCounts = {};
                blogs.forEach(blog => {
                    blog.tags.forEach(tag => {
                        if (!tagCounts[tag]) {
                            tagCounts[tag] = 0;
                        }
                        tagCounts[tag]++;
                    });
                });

                // filter
                if (tags.length) {
                    blogs = blogs.filter(blog => tags.some(tag => blog.tags.includes(tag)));
                }

                 // search 
                if (search) {
                    blogs = blogs.filter(blog => blog.title.includes(search) || blog.content.includes(search))
                }

                // pagination
                const total = blogs.length;
                const totalPages = Math.ceil(total / pageSize);
                const startIdx = (page - 1) * pageSize;
                const endIdx = startIdx + pageSize;
                blogs = blogs.slice(startIdx, endIdx)

                return {
                    page,
                    pageSize,
                    total,
                    totalPages,
                    data: blogs,
                    blogList: response,
                    tagCounts
                };
            }
        }), 
    })
})

export const {
    useGetPostsQuery,   
} = blogsApiSlice;
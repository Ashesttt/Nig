const fs = require('fs');

function searchPosts(keyword) {
    const postsDirectory ='src/pages/posts';

    // 读取所有的Markdown文件内容
    const posts = fs.readdirSync(postsDirectory).map((fileName) => {
        const postContent = fs.readFileSync(`${postsDirectory}/${fileName}`, 'utf8');
        return {
            fileName,
            content: postContent,
        };
    });

    // 过滤出包含关键字的文章
    const filteredPosts = posts.filter((post) => {
        return post.content.toLowerCase().includes(keyword.toLowerCase());
    });

    return filteredPosts;
}

module.exports = { searchPosts };

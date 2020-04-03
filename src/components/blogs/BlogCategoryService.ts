import parser from 'fast-xml-parser';
import blog_categories from 'AppConfig/blog-categories.xml';
import { BlogCategoryModel } from './BlogCategoryModel';

export function loadBlogCategories(): BlogCategoryModel {
    if( parser.validate(blog_categories) === true) { //optional (it'll return an object in case it's not valid)
        let categories = parser.parse(blog_categories);
        console.log(categories);
    }
    return null;
}

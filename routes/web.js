const express = require("express");

const StudentController = require("../controllers/StudentController");
const EmployeeController = require("../controllers/EmployeeController");
const OrderController = require("../controllers/OrderController");
const FrontEndController = require("../controllers/FrontEndController");
const AdminController = require("../controllers/admin/AdminController");
const BlogController  = require('../controllers/admin/BlogController');
const CategoryController = require("../controllers/admin/CategoryController");
const UserController = require("../controllers/admin/UserController");
const router = express.Router();



/*router.get("/", (req, res) => {
  res.send("Hello world");
});*/
//--------studentcontroller-------//
router.get("/studentdisplay", StudentController.display);
router.get("/studentcreate", StudentController.create);
router.get("/studentview", StudentController.view);
router.get("/studentedit", StudentController.edit);
router.get("/studentdelete", StudentController.delete);
//-------EmplyeeController---------//
router.get("/employee_home", EmployeeController.home);
router.get("/employee_about", EmployeeController.about);
router.get("/employee_ourteam", EmployeeController.ourteam);
router.get("/employee_contactus", EmployeeController.contactus);
router.get("/employee_login", EmployeeController.login);
//------orderController--//
router.get('/order/display',OrderController.display)
router.get('/order/create',OrderController.create)
/*FrontEndController--*/

router.get('/',FrontEndController.home)
router.get('/about',FrontEndController.about)
router.get('/ourteam',FrontEndController.ourteam)
router.get('/login',FrontEndController.login)
router.get('/blogdetail/:id',FrontEndController.blogDetail)
router.get('/contactus',FrontEndController.contactus)
/*---------AdminController-----*/
router.get('/admin/dashboard',AdminController.dashboard)
/*------admin/blog Controller----*/
router.get('/admin/blogDisplay',BlogController.blogDisplay)
router.get('/admin/createBlog',BlogController.createBlog)
router.post('/admin/bloginsert',BlogController.bloginsert)
router.get('/admin/viewBlog/:id',BlogController.viewBlog)
router.get('/admin/editBlog/:id',BlogController.editBlog)
router.post('/admin/blogupdate/:id',BlogController.blogupdate)
router.get('/admin/deleteblog/:id',BlogController.deleteblog)
/*---------CategoryController--------*/
router.get("/admin/createcategory",CategoryController.createcategory)
router.post("/admin/categoryInsert",CategoryController.categoryInsert)
router.get("/admin/categorydisplay",CategoryController.categoryDisplay)
router.get("/admin/viewcategory/:id",CategoryController.viewcategory)
router.get('/admin/editcategory/:id',CategoryController.editcategory)
router.post('/admin/categoryupdate/:id',CategoryController.categoryupdate)
router.get('/admin/deletecategory/:id',CategoryController.deletecategory)
/*-------------admin/usercontroller-------*/
router.get('/admin/register',UserController.register)
router.post('/admin/registerinsert',UserController.registerinsert)
router.get('/user/login',UserController.login)
router.post('/verify/login',UserController.verifylogin)
router.get('/logout',UserController.logout)
module.exports = router;



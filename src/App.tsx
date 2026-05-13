
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './pages/home/Home';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PetClinic from './pages/pet_clinic/PetClinic';
import ClinicDetails from './pages/clinic_details/ClinicDetails';
import ProductDetails from './pages/product_details/ProductDetails';
import PetStores from './pages/pet_stores/PetStores';
import StoreDetails from './pages/store_details/StoreDetails';
import Vets from './pages/vets/Vets';
import SendMessagePage from './pages/send_message_page/SendMessagePage';
import VetDetails from './pages/vet_details/VetDetails';
import Pharmacies from './pages/pharmacies/Pharmacies';
import PharmacyDetails from './pages/pharmacy_details/PharmacyDetails';
import ForumCategories from './pages/categories/CategoriePage';
import ForumLayout from './components/forum_layout/ForumLayout';
import ForumsPage from './pages/forums/ForumsPage';
import TopicDetails from './pages/topic_details/TopicDetails';
import AddTopic from './pages/add_topic/AddTopic';
import { Slide, ToastContainer } from 'react-toastify';
import BlogCategories from './pages/blog_categories/BlogCategories';
import Blogs from './pages/blogs/Blogs';
import BlogLayout from './components/blog_layout/BlogLayout';
import BlogDetails from './pages/blog_details/BlogDetails';
import ClinicRegister from './pages/clinic_register/ClinicRegister';
import VetRegister from './pages/vets_register/VetsRegister';
import StoreRegister from './pages/store_register/StoreRegister';
import PharmacyRegister from './pages/pharmacy_register/PharmacyRegister';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ForgetPassword from './pages/forget_password/ForgetPassword';
import AccountLayout from './components/account_layout/AccountLayout';
import Profile from './pages/profile/Profile';
import ChatLayout from './components/chat_layout/ChatLayout';
import Messages from './pages/messages/Messages';
import Archeive from './pages/messages/Messages';
import MyFavourites from './pages/my_favourites/MyFavourites';
import MyProducts from './pages/my_products/MyProducts';
import AddProduct from './pages/add_product/AddProduct';
import MyTopics from './pages/my_topics/MyTopics';
import AddMyTopic from './pages/add_my_topic/AddMyTopic';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  const queryClient = new QueryClient();

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "/pet-clinics",
          element: <PetClinic />,
        },
        {
          path: "/pet-stores",
          element: <PetStores />,
        },
        {
          path: "/vets",
          element: <Vets />,
        },
        {
          path: "/vets/:id",
          element: <VetDetails />,
        },

        {
          path: "/pharmacies",
          element: <Pharmacies />,
        },
        {
          path: "/pharmacies/:id",
          element: <PharmacyDetails />,
        },
        {
          path: "/send-message",
          element: <SendMessagePage />,
        },
        {
          path: "/pet-clinics/:id",
          element: <ClinicDetails />,
        },
        {
          path: "/pet-stores/:id",
          element: <StoreDetails />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
        {
          path: "/forum-categories",
          element: <ForumCategories />,
        },
        {
          path: "/blog-categories",
          element: <BlogCategories />,
        },
        {
          path: "/forums/:categoryId",
          element: (
            <ForumLayout />
          ),
          children: [
            {
              index: true,
              element: <ForumsPage />,
            },
            {
              path: "add-topic",
              element: <AddTopic />,
            },
            {
              path: ":topicId",
              element: <TopicDetails />
            }
          ]
        },
        {
          path: "/blogs/:categoryId",
          element: (
            <BlogLayout />
          ),
          children: [
            {
              index: true,
              element: <Blogs />,
            },

            {
              path: ":blogId",
              element: <BlogDetails />
            }
          ]
        },
        {
          path: "/clinic-register",
          element: <ClinicRegister />,
        },
        {
          path: "/vet-register",
          element: <VetRegister />,
        },
        {
          path: "/store-register",
          element: <StoreRegister />,
        },
        {
          path: "/pharmacy-register",
          element: <PharmacyRegister />,
        },
        {
          path: "/signin",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "/account",
          element: (
            <AccountLayout />
          ),
          children: [
            {
              index: true,
              element: <Profile />,
            },
            {
              path: "myfavourites",
              element: <MyFavourites />,
            },
            {
              path: "myProducts",
              element: <MyProducts />,
            },
            {
              path: "add-product",
              element: <AddProduct />,
            },
            {
              path: "edit-product",
              element: <AddProduct />,
            },
            {
              path: "my-topics",
              element: <MyTopics />,
            },
            {
              path: "add-my-topic",
              element: <AddMyTopic />,
            },
          ]
        },
        {
          path: "/chat",
          element: (
            <ChatLayout />
          ),
          children: [
            {
              index: true,
              element: <Messages />,
            },

            {
              path: "archeive",
              element: <Archeive />,
            },


          ]
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <ToastContainer
          autoClose={3000}
          closeButton={false}
          closeOnClick={true}
          transition={Slide}
        />
      </QueryClientProvider>
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
// import * as Pages from "@pages";
// import { AppLayout, ProtectedRoute } from "@components";
import { AppLayout } from "@components";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Pages.LoginPage />} /> */}
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={
            <div
              style={{
                backgroundColor: "red",
                fontFamily: "var(--font-base)",
                fontSize: "var(--font-size-md)",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque
              maxime temporibus itaque delectus autem, esse sunt, dolorum nihil,
              voluptates animi deserunt iure ipsam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugit, in libero omnis unde laborum
              molestias fuga sint aperiam, laudantium similique suscipit,
              voluptatem quae harum? Temporibus magni aspernatur blanditiis ut
              tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit illo maxime nam distinctio culpa adipisci cumque expedita?
              Necessitatibus dolores quo dolore voluptates fuga? Optio beatae
              consectetur tempora dolores saepe voluptates. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. At veniam nostrum expedita
              ea voluptatum voluptate, vero facilis tenetur deserunt sunt nemo?
              Tempore repudiandae sunt aliquam! Sit pariatur odit possimus
              eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga, iure autem? Soluta suscipit quis, pariatur ipsa mollitia
              dolore, fugiat inventore cumque deleniti ab accusamus? Id enim
              aliquid quod vel harum. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Optio fugit ratione veniam minus iste vitae
              dolores voluptates quis sunt. Et dolores error maiores voluptates
              vero molestias nemo nihil officia voluptatum.
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

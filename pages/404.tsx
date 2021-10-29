import * as React from "react";
import { getLayout } from "../components/Layout";
import { NotFound } from "../components/NotFound";

const NotFoundPage = () => <NotFound />;

NotFoundPage.getLayout = getLayout;

export default NotFoundPage;

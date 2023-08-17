import { DetailsPage, Error, MainPage } from "pages/index";
import { RouteProps } from "react-router-dom";
import { Features, RentTerms, Team } from "widgets/index";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean,
    childrens?: object
}

export enum mainAppRoutes {
    MAIN = "main",
    DETAILS = "details",

    NOT_FOUND = "not_found",
}

export enum detailAppRoutes {
    FEATURES = 'features',
    TEAM = 'team',
    TERMS = 'terms',

}

export const mainRoutePath: Record<mainAppRoutes, string> = {
    [mainAppRoutes.MAIN]: "/",
    [mainAppRoutes.DETAILS]: "/details/",// + :id
    [mainAppRoutes.NOT_FOUND]: "*",
}
export const detailRoutePath: Record<detailAppRoutes, string> = {
    [detailAppRoutes.FEATURES]: "",
    [detailAppRoutes.TEAM]: "team",
    [detailAppRoutes.TERMS]: "terms", 
}

export const detailRouteConfig: Record<detailAppRoutes, AppRoutesProps> = {
    [detailAppRoutes.FEATURES]: {
        path: detailRoutePath.features,
        element: <Features/>,
    },
    [detailAppRoutes.TEAM]: {
        path: detailRoutePath.team,
        element: <Team/>,
    },
    [detailAppRoutes.TERMS]: {
        path: detailRoutePath.terms,
        element: <RentTerms/>,
    }
}

export const mainRouteConfig: Record<mainAppRoutes, AppRoutesProps> = {
    [mainAppRoutes.MAIN]: {
        path: mainRoutePath.main,
        element: <MainPage/>,
    },
    [mainAppRoutes.DETAILS]: {
        path: `${mainRoutePath.details}:detailsId`,
        element: <DetailsPage/>,
        childrens: detailRouteConfig,
    },
    [mainAppRoutes.NOT_FOUND]: {
        path: mainRoutePath.not_found,
        element: <Error />,
    },
}


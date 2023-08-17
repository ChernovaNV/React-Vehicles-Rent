import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "shared/UI";
import { AppRoutesProps } from "shared/config/routeConfig/routeConfig";

export type AppRouterProps =  {
  routeConfig: object;
}

const AppRouter = memo(({routeConfig}: AppRouterProps) => {

  
  const renderWithWrapper = useCallback((route:AppRoutesProps)=>{
    
      const element = (
        <Suspense fallback={<Loader/>}>
            {route.element}
        </Suspense>
      )

      return (
        
      <Route
        key={route.path}
        path={route.path}
        element={element}
      >
        {route.childrens ? 
          <>
            {Object.values(route.childrens).map(renderWithWrapper)}
          </>
          : <></>
        }
      </Route>
      )

    },[])
    return (
      
      <Routes>
      
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    );
  });
  
  export default AppRouter;
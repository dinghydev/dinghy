import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CODE_FOR_INTELLIJ = {
  _style:
    'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjQyNCIgaGVpZ2h0PSI0MjQiIHZpZXdCb3g9IjAgMCA0MjQgNDI0Ij4mI3hhOwk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNDI4NWY0O30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQgMHY0MjRIMFYwek0yMTIgOTcuODQ2Yy0zNy44ODQgMC03MC4xNjQgMjMuOTktODIuNDc4IDU3LjYwOGgwbC0zLjQwMy4wMDFjLTQyLjYzNCAwLTc3LjE5NiAzNC41NjItNzcuMTk2IDc3LjE5NnMzNC41NjIgNzcuMTk2IDc3LjE5NiA3Ny4xOTZoMCAxNzEuNzYzYzQyLjYzNCAwIDc3LjE5Ni0zNC41NjIgNzcuMTk2LTc3LjE5NnMtMzQuNTYyLTc3LjE5Ni03Ny4xOTYtNzcuMTk2aDBsLTMuNDAzLS4wMDFDMjgyLjE2NCAxMjEuODM3IDI0OS44ODQgOTcuODQ2IDIxMiA5Ny44NDZ6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  _width: 40,
  _height: 40,
}

export function CloudCodeForIntellij(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CODE_FOR_INTELLIJ}
      {...props}
      _style={extendStyle(CLOUD_CODE_FOR_INTELLIJ, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIRESTORE = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjMyMy45MDU2MTAzOTg2NzUxNSIgaGVpZ2h0PSIzNzYuNDIyMjk0OTYzNjg0MDciIHZpZXdCb3g9Ii0wLjA5NzAwMDAwMjg2MTAyMjk1IDAuMjg3OTk5OTg3NjAyMjMzOSA4NS42OTk5OTY5NDgyNDIxOSA5OS41OTUwMDEyMjA3MDMxMiI+JiN4YTs8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojYWVjYmZhO30mI3hhOwkuc3Qxe2ZpbGw6IzY2OWRmNjt9JiN4YTsJLnN0MntmaWxsOiM0Mjg1ZjQ7fSYjeGE7PC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLS4wOTcgNzUuODE1VjU1Ljg3NGw0Mi44NS0yMC4xODN2MTkuMDd6bTAtMzUuNDAzVjIwLjQ3MUw0Mi43NTMuMjg4djE5LjA3eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04NS42MDMgNzUuODE1VjU1Ljg3NGwtNDIuODUtMjAuMTgzdjE5LjA3em0wLTM1LjQwM1YyMC40NzFMNDIuNzUzLjI4OHYxOS4wN3oiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDIuNzUzIDgwLjMxNGwxNi4yMTctNy41MjUgMjEuMDg0IDkuNzE3LTM3LjMwMSAxNy4zNzd6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  },
  _width: 34,
  _height: 40,
}

export function Firestore(props: DiagramNodeProps) {
  return (
    <Shape {...FIRESTORE} {...props} _style={extendStyle(FIRESTORE, props)} />
  )
}

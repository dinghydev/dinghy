import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVELOPER_PORTAL = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0LjE0MzAxOTY3NjIwODQ5NiIgdmlld0JveD0iMCAwLjAwMDQ4OTk2NjI0NTM2ODEyMzEgMjAgMTQuMTQzMDE5Njc2MjA4NDk2Ij4mI3hhOwk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGE7CS5zdDB7ZmlsbDojNDI4NWY0O30mI3hhOwkuc3Qxe2ZpbGw6IzY2OWRmNjt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAgMS40NzJhNS41OSA1LjU5IDAgMCAxIDQgMS42bDEtMWE3LjA3IDcuMDcgMCAwIDAtMTAgMGgwbDEgMWE1LjU5IDUuNTkgMCAwIDEgNC0xLjZ6bTAgMTEuMmE1LjU5IDUuNTkgMCAwIDEtNC0xLjZsLTEgMWE3LjA3IDcuMDcgMCAwIDAgMTAgMGgwbC0xLTFhNS41OSA1LjU5IDAgMCAxLTQgMS42eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMCAxMC4xNDJhMy4wNiAzLjA2IDAgMCAxLTMtMi4zNEgzLjExdjIuMzhMMCA3LjA3MmwzLjExLTMuMXYyLjM4SDdhMy4wNiAzLjA2IDAgMCAxIDMtMi4zNGgwYTMuMDYgMy4wNiAwIDAgMSAzIDIuMzRoMy45MXYtMi4zOUwyMCA3LjA3MmwtMy4xMSAzLjEydi0yLjM5SDEzYTMuMDYgMy4wNiAwIDAgMS0zIDIuMzR6bTAtNC42OGExLjYxIDEuNjEgMCAxIDAgMS42MSAxLjYxaDBBMS42MSAxLjYxIDAgMCAwIDEwIDUuNDYyeiIvPiYjeGE7PC9zdmc+;strokeColor=none;',
  },
  _width: 42,
  _height: 29,
}

export function DeveloperPortal(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVELOPER_PORTAL}
      {...props}
      _style={extendStyle(DEVELOPER_PORTAL, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIALOGFLOW_ENTERPRISE_EDITION = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE2LjAwMDAwNzYyOTM5NDUzIiBoZWlnaHQ9IjE5LjgzNjQ5NDQ0NTgwMDc4IiB2aWV3Qm94PSItMC4wMDAwMDY3MzA4MDY0ODk5NDA3MzMgMC4wMDAzMTcxNzE4ODUzOTkxNDc4NyAxNi4wMDAwMDc2MjkzOTQ1MyAxOS44MzY0OTQ0NDU4MDA3OCI+JiN4YTsJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTsJLnN0MXtmaWxsOiM2NjlkZjY7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTggOS45NzFsLTgtNHY2Ljc2YS40OS40OSAwIDAgMCAuMTkuMzlsNC42NCAyLjc1YS4zMi4zMiAwIDAgMSAuMTcuMjl2My41MWEuMTcuMTcgMCAwIDAgLjI2LjE0bDEwLjUxLTYuNjlhLjUuNSAwIDAgMCAuMjMtLjQydi02LjczeiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04IDcuOTcxbDgtNEw4LjEyLjAzMWEuMjUuMjUgMCAwIDAtLjI0IDBMMCAzLjk3MXoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 34,
  _height: 42,
}

export function DialogflowEnterpriseEdition(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DIALOGFLOW_ENTERPRISE_EDITION)}
    />
  )
}

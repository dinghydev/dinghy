import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ERROR_REPORTING = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0wIDE1bDUgNWg1bC0yLjUtMi44Nkg2LjI1bC0zLjM5LTMuMzl2LTcuNWwzLjM5LTMuMzlINy41TDEwIDBINUwwIDV6TTEzLjc1IDIuODZsMy4zOSAzLjM5djcuNWwtMy4zOSAzLjM5SDEwTDEyLjUgMjBIMTVsNS01VjVsLTUtNWgtMi41TDEwIDIuODZ6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAgMTBMNy41IDcuNSAxMCA1SDcuNUw1IDcuNXY1TDcuNSAxNUgxMGwtMi41LTIuNXptMi41IDBMMTAgMTIuNWwyLjUgMi41IDIuNS0yLjV2LTVMMTIuNSA1IDEwIDcuNXoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPiYjeGE7PC9zdmc+;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function ErrorReporting(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_REPORTING}
      {...props}
      _style={extendStyle(ERROR_REPORTING, props)}
    />
  )
}

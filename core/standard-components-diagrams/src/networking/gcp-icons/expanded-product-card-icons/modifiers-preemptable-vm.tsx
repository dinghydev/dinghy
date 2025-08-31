import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODIFIERS_PREEMPTABLE_VM = {
  _style:
    'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE3IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTcgMTgiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTExIDE2aDJ2MmgtMnptNCAwaDJ2MmgtMnptMC04aDJ2MmgtMnptLTQtOGgydjJoLTJ6bTQgMGgydjJoLTJ6TTMuNTcgNy4zMkw3IDE0bDMtNGgzVjhIOWwtMS43NCAyLjM0TDQgNCAyIDYuMjFWMmg3VjBIMmEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoN3YtMkgyVjl6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  _width: 34,
  _height: 36,
}

export function ModifiersPreemptableVm(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODIFIERS_PREEMPTABLE_VM}
      {...props}
      _style={extendStyle(MODIFIERS_PREEMPTABLE_VM, props)}
    />
  )
}

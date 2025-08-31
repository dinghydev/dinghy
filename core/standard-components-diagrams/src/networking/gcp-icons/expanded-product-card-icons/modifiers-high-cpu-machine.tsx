import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODIFIERS_HIGH_CPU_MACHINE = {
  _style:
    'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE3IiBoZWlnaHQ9IjE1IiB2aWV3Qm94PSIwIDAgMTcgMTUiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIgN2gxNEw5IDB6bTcuNSAySDZ2NmgxLjV2LTJoMmExLjU0IDEuNTQgMCAwIDAgMS41LTEuNXYtMUExLjU0IDEuNTQgMCAwIDAgOS41IDl6bTAgMi41aC0ydi0xaDJ6bS00LjUtMVY5SDEuNUExLjU0IDEuNTQgMCAwIDAgMCAxMC41djNBMS41NCAxLjU0IDAgMCAwIDEuNSAxNUg1di0xLjVIMS41di0zek0xNS41IDl2NC41aC0yVjlIMTJ2NC41YTEuNTQgMS41NCAwIDAgMCAxLjUgMS41aDJhMS41NCAxLjU0IDAgMCAwIDEuNS0xLjVWOXoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  _width: 34,
  _height: 30,
}

export function ModifiersHighCpuMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODIFIERS_HIGH_CPU_MACHINE}
      {...props}
      _style={extendStyle(MODIFIERS_HIGH_CPU_MACHINE, props)}
    />
  )
}

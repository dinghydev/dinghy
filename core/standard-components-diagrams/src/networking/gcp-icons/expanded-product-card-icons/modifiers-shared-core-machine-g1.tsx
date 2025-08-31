import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODIFIERS_SHARED_CORE_MACHINE_G1 = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2IDBIMmEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6TTkgNkg1djZoMlY5aDJ2NUg1YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDR6bTYgOGgtMlY2aC0yVjRoNHoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 36,
  _height: 36,
}

export function ModifiersSharedCoreMachineG1(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODIFIERS_SHARED_CORE_MACHINE_G1}
      {...props}
      _style={extendStyle(MODIFIERS_SHARED_CORE_MACHINE_G1, props)}
    />
  )
}

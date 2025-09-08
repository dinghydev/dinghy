import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODIFIERS_SHARED_CORE_MACHINE_F1 = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2IDBIMmEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6TTkgNkg1djJoM3YySDV2NEgzVjZhMiAyIDAgMCAxIDItMmg0em02IDhoLTJWNmgtMlY0aDR6Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function ModifiersSharedCoreMachineF1(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODIFIERS_SHARED_CORE_MACHINE_F1}
      {...props}
      _style={extendStyle(MODIFIERS_SHARED_CORE_MACHINE_F1, props)}
    />
  )
}

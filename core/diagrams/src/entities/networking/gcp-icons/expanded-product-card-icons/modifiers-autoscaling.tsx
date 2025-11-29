import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MODIFIERS_AUTOSCALING = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIgMTZWMmgxNHY3aDJWMmEyIDIgMCAwIDAtMi0ySDJhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDd2LTJ6bTE2LTVoLTJ2My41OUw2LjE3IDQuNzYgNC43NiA2LjE3IDE0LjU5IDE2SDExdjJoN3oiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _original_width: 36,
  _original_height: 36,
}

export function ModifiersAutoscaling(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MODIFIERS_AUTOSCALING)} />
}

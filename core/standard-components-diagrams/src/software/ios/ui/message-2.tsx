import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE_2 = {
  _style: {
    entity:
      'shape=rect;strokeColor=none;fillColor=default;gradientColor=none;shadow=0;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 164,
  _original_height: 35,
}

export function Message2(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_2} {...props} _style={extendStyle(MESSAGE_2, props)} />
  )
}

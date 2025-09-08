import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TOOLBOX = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Toolbox.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 56.00000000000001,
}

export function Toolbox(props: DiagramNodeProps) {
  return <Shape {...TOOLBOX} {...props} _style={extendStyle(TOOLBOX, props)} />
}

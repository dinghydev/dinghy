import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MODULE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Module.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Module(props: DiagramNodeProps) {
  return <Shape {...MODULE} {...props} _style={extendStyle(MODULE, props)} />
}

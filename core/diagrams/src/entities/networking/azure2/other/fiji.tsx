import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIJI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Fiji.svg;strokeColor=none;',
  },
  _original_width: 54,
  _original_height: 68,
}

export function Fiji(props: DiagramNodeProps) {
  return <Shape {...FIJI} {...props} _style={extendStyle(FIJI, props)} />
}

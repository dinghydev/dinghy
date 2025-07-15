import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CURRENT_LOCATION = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.current_location;strokeColor=#ffffff;fillColor=#0080F0;sketch=0;',
  _width: 60,
  _height: 60,
}

export function CurrentLocation(props: DiagramNodeProps) {
  return <Shape {...CURRENT_LOCATION} {...props} />
}

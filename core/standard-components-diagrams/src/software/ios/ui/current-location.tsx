import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CURRENT_LOCATION = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.current_location;strokeColor=#ffffff;fillColor=#0080F0;sketch=0;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function CurrentLocation(props: DiagramNodeProps) {
  return (
    <Shape
      {...CURRENT_LOCATION}
      {...props}
      _style={extendStyle(CURRENT_LOCATION, props)}
    />
  )
}

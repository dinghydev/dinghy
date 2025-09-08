import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IPAD_BACKGROUND_STRIPED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iBgStriped;strokeColor=#18211b;fillColor=#5D7585;strokeColor2=#657E8F;',
  },
  _original_width: 175,
  _original_height: 280,
}

export function IpadBackgroundStriped(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPAD_BACKGROUND_STRIPED}
      {...props}
      _style={extendStyle(IPAD_BACKGROUND_STRIPED, props)}
    />
  )
}

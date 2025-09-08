import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PREFERENCES = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.preferences;pointerEvents=1',
  },
  _original_width: 30,
  _original_height: 24,
}

export function Preferences(props: DiagramNodeProps) {
  return (
    <Shape
      {...PREFERENCES}
      {...props}
      _style={extendStyle(PREFERENCES, props)}
    />
  )
}

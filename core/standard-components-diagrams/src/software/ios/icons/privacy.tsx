import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVACY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.privacy;',
  },
  _original_width: 16.8,
  _original_height: 28.5,
}

export function Privacy(props: DiagramNodeProps) {
  return <Shape {...PRIVACY} {...props} _style={extendStyle(PRIVACY, props)} />
}

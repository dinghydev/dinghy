import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MORE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.more;strokeColor=#a0a0a0;',
  },
  _original_width: 5,
  _original_height: 8,
}

export function More(props: DiagramNodeProps) {
  return <Shape {...MORE} {...props} _style={extendStyle(MORE, props)} />
}

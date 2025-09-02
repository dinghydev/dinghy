import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPTIONS = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.options;fillColor=#222222;sketch=0;',
  },
  _original_width: 12,
  _original_height: 6,
}

export function Options(props: DiagramNodeProps) {
  return <Shape {...OPTIONS} {...props} _style={extendStyle(OPTIONS, props)} />
}

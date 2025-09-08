import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const X_CONST = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.x;strokeColor=#737373;fillColor=#737373;shadow=0;strokeWidth=2;sketch=0;',
  },
  _original_width: 16,
  _original_height: 16,
}

export function X(props: DiagramNodeProps) {
  return <Shape {...X_CONST} {...props} _style={extendStyle(X_CONST, props)} />
}

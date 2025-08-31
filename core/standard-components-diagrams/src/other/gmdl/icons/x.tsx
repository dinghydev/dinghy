import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X_CONST = {
  _style:
    'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.x;strokeColor=#737373;fillColor=#737373;shadow=0;strokeWidth=2;sketch=0;',
  _width: 16,
  _height: 16,
}

export function X(props: DiagramNodeProps) {
  return <Shape {...X_CONST} {...props} _style={extendStyle(X_CONST, props)} />
}

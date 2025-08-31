import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTERPRISE_BUSINESS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.enterprise_business;',
  _width: 38,
  _height: 33,
}

export function EnterpriseBusiness(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTERPRISE_BUSINESS}
      {...props}
      _style={extendStyle(ENTERPRISE_BUSINESS, props)}
    />
  )
}

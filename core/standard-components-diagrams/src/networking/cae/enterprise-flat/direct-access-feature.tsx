import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECT_ACCESS_FEATURE = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.direct_access_feature',
  _width: 50,
  _height: 44,
}

export function DirectAccessFeature(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_ACCESS_FEATURE}
      {...props}
      _style={extendStyle(DIRECT_ACCESS_FEATURE, props)}
    />
  )
}

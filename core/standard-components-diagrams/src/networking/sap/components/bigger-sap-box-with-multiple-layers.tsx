import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIGGER_SAP_BOX_WITH_MULTIPLE_LAYERS = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;strokeColor=#0070F2;fillColor=#EBF8FF;arcSize=24;absoluteArcSize=1;imageWidth=64;imageHeight=64;strokeWidth=1.5;',
  _width: 0,
  _height: 250,
}

export function BiggerSapBoxWithMultipleLayers(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIGGER_SAP_BOX_WITH_MULTIPLE_LAYERS}
      {...props}
      _style={extendStyle(BIGGER_SAP_BOX_WITH_MULTIPLE_LAYERS, props)}
    />
  )
}

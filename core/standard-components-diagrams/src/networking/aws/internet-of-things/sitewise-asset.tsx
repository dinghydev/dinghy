import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITEWISE_ASSET = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_sitewise_asset;',
  _width: 77,
  _height: 78,
}

export function SitewiseAsset(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITEWISE_ASSET}
      {...props}
      _style={extendStyle(SITEWISE_ASSET, props)}
    />
  )
}

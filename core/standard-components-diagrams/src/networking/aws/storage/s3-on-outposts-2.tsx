import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const S3_ON_OUTPOSTS_2 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.s3_on_outposts;',
  _width: 60,
  _height: 60,
}

export function S3OnOutposts2(props: DiagramNodeProps) {
  return (
    <Shape
      {...S3_ON_OUTPOSTS_2}
      {...props}
      _style={extendStyle(S3_ON_OUTPOSTS_2, props)}
    />
  )
}

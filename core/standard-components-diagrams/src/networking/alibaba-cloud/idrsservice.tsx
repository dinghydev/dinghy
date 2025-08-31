import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDRSSERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.idrsservice;',
  },
  _width: 60,
  _height: 60,
}

export function Idrsservice(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDRSSERVICE}
      {...props}
      _style={extendStyle(IDRSSERVICE, props)}
    />
  )
}

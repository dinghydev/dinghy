import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECTMAIL = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.directmail;',
  _width: 52.5,
  _height: 34.8,
}

export function Directmail(props: DiagramNodeProps) {
  return (
    <Shape {...DIRECTMAIL} {...props} _style={extendStyle(DIRECTMAIL, props)} />
  )
}

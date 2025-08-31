import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLS_ASRCUSTOMMODEL = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nls-asrcustommodel;',
  _width: 60,
  _height: 60,
}

export function NlsAsrcustommodel(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLS_ASRCUSTOMMODEL}
      {...props}
      _style={extendStyle(NLS_ASRCUSTOMMODEL, props)}
    />
  )
}

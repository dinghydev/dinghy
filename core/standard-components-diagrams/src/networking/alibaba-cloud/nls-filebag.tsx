import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLS_FILEBAG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nls-filebag;',
  },
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function NlsFilebag(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLS_FILEBAG}
      {...props}
      _style={extendStyle(NLS_FILEBAG, props)}
    />
  )
}

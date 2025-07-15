import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OTS_TABLESTORE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ots_tablestore;',
  _width: 53.1,
  _height: 42.599999999999994,
}

export function OtsTablestore(props: DiagramNodeProps) {
  return <Shape {...OTS_TABLESTORE} {...props} />
}

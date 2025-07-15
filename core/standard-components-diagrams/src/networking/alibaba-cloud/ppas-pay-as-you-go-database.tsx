import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PPAS_PAY_AS_YOU_GO_DATABASE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ppas_pay-as-you-go_database;',
  _width: 39.900000000000006,
  _height: 54.6,
}

export function PpasPayAsYouGoDatabase(props: DiagramNodeProps) {
  return <Shape {...PPAS_PAY_AS_YOU_GO_DATABASE} {...props} />
}

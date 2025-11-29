import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PPAS_PAY_AS_YOU_GO_DATABASE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ppas_pay-as-you-go_database;',
  },
  _width: 39.900000000000006,
  _height: 54.6,
}

export function PpasPayAsYouGoDatabase(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PPAS_PAY_AS_YOU_GO_DATABASE)}
    />
  )
}

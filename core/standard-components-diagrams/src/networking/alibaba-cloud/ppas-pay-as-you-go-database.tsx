import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PPAS_PAY_AS_YOU_GO_DATABASE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ppas_pay-as-you-go_database;',
  },
  _original_width: 39.900000000000006,
  _original_height: 54.6,
}

export function PpasPayAsYouGoDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...PPAS_PAY_AS_YOU_GO_DATABASE}
      {...props}
      _style={extendStyle(PPAS_PAY_AS_YOU_GO_DATABASE, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CDT_CLOUD_DATATRANSFER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cdt_cloud_datatransfer;',
  },
  _original_width: 50.099999999999994,
  _original_height: 42.3,
}

export function CdtCloudDatatransfer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CDT_CLOUD_DATATRANSFER}
      {...props}
      _style={extendStyle(CDT_CLOUD_DATATRANSFER, props)}
    />
  )
}

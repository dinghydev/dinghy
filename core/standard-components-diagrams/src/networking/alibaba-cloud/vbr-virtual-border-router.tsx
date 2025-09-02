import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VBR_VIRTUAL_BORDER_ROUTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vbr_virtual_border_router;',
  },
  _original_width: 57.599999999999994,
  _original_height: 57.599999999999994,
}

export function VbrVirtualBorderRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...VBR_VIRTUAL_BORDER_ROUTER}
      {...props}
      _style={extendStyle(VBR_VIRTUAL_BORDER_ROUTER, props)}
    />
  )
}

import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TMS_DATA_INTERFACE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/tms_data_interface.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function TmsDataInterface(props: NodeProps) {
  return (
    <Shape
      {...TMS_DATA_INTERFACE}
      {...props}
      _style={extendStyle(TMS_DATA_INTERFACE, props)}
    />
  )
}

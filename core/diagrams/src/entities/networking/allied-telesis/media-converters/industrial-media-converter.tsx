import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUSTRIAL_MEDIA_CONVERTER = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Industrial_Media_Converter.svg;strokeColor=none;',
  },
  _width: 30,
  _height: 57,
}

export function IndustrialMediaConverter(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, INDUSTRIAL_MEDIA_CONVERTER)} />
  )
}

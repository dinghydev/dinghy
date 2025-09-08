import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INDUSTRIAL_MEDIA_CONVERTER = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Industrial_Media_Converter.svg;strokeColor=none;',
  },
  _original_width: 30,
  _original_height: 57,
}

export function IndustrialMediaConverter(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_MEDIA_CONVERTER}
      {...props}
      _style={extendStyle(INDUSTRIAL_MEDIA_CONVERTER, props)}
    />
  )
}

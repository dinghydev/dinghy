import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUSTRIAL_MEDIA_CONVERTER_POE = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Industrial_Media_Converter_POE.svg;strokeColor=none;',
  _width: 30,
  _height: 57,
}

export function IndustrialMediaConverterPoe(props: DiagramNodeProps) {
  return <Shape {...INDUSTRIAL_MEDIA_CONVERTER_POE} {...props} />
}

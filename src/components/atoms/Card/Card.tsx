import { Box, BoxProps } from '../Box/Box';

export interface CardProps extends BoxProps { }
export function Card(props: CardProps) {
    return (
        <Box
            {...props}
            {...$cardContainer}
        >{props.children}</Box>
    );
}

const $cardContainer: BoxProps = {
    backgroundColor: 'white100',
    borderRadius: 's8',
    mt: 's32',
    padding: 's16',
    borderColor: 'gray200',
    borderWidth: 1,
};

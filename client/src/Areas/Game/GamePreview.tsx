import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import {GoPerson} from "react-icons/all";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import {CopyToClipboard} from "react-copy-to-clipboard";

interface IGamePreviewProps
{
	id: string;
}

const useStyles = makeStyles({
	playersLabel: {
		marginTop: "2rem"
	},
	gameId: {
		padding: "1rem 0"
	}
});

const GamePreview: React.FC<IGamePreviewProps> = (props) =>
{
	const classes = useStyles();

	const [copied, setCopied] = useState(false);

	const onCopy = () => {
		setCopied(true);

		setTimeout(() => setCopied(false), 3000);
	};

	const shareLabel = copied ? "Copied!" : "Copy Link to Game";

	return (
		<div>
			<Typography>Game ID: </Typography>
			<Typography variant={"h4"} className={classes.gameId}>{props.id}</Typography>

			<CopyToClipboard text={`${location.protocol}//${location.host}/game/join/${props.id}`} onCopy={onCopy}>
				<Button variant={"contained"} color={"primary"}>
					{shareLabel}
				</Button>
			</CopyToClipboard>

			<Typography className={classes.playersLabel}>Players</Typography>
			<List>
				<ListItem>
					<ListItemIcon>
						<GoPerson/>
					</ListItemIcon>
					<ListItemText>Player</ListItemText>
				</ListItem>
				<Divider/>
				<ListItem>
					<ListItemIcon>
						<GoPerson/>
					</ListItemIcon>
					<ListItemText>Player</ListItemText>
				</ListItem>
				<Divider/>
				<ListItem>
					<ListItemIcon>
						<GoPerson/>
					</ListItemIcon>
					<ListItemText>Player</ListItemText>
				</ListItem>
				<Divider/>
				<ListItem>
					<ListItemIcon>
						<GoPerson/>
					</ListItemIcon>
					<ListItemText>Player</ListItemText>
				</ListItem>
				<Divider/>
				<ListItem>
					<ListItemIcon>
						<GoPerson/>
					</ListItemIcon>
					<ListItemText>Player</ListItemText>
				</ListItem>
				<Divider/>
			</List>
			{props.children}
		</div>
	);
};

export default GamePreview;